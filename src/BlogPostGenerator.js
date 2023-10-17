const fs = require('fs');
const sharp = require('sharp');

const output_filename = "thumbnail";
const blogFile = '/index.md';

// Define the desired resolutions
const resolutions = [
  {name: "small", width: 480},
  {name: "medium", width: 566},
  {name: "large", width: 633},
  {name: "default", width: 778},
  {name: "xlarge", width: 964}
];

var imgHtml = '<img loading="eager" src={require(\'./thumbnail-default.webp\').default} ';

imgHtml += 'srcSet={'
  +'require(\'./thumbnail-small.webp\').default+" 480w,"+'
  +'require(\'./thumbnail-medium.webp\').default+" 566w,"+'
  +'require(\'./thumbnail-large.webp\').default+" 633w,"+'
  +'require(\'./thumbnail-default.webp\').default+" 778w,"+'
  +'require(\'./thumbnail-xlarge.webp\').default+" 964w"'
+'} '

imgHtml += 'sizes="'+
  "(max-width: 512px) 480px,"+
  "(max-width: 598px) 566px,"+
  "(max-width: 665px) 633px,"+
  "(max-width: 810px) 778px,"+
  "(max-width: 996px) 964px,"+
  "(max-width: 1024px) 566px,"+
  "(max-width: 1368px) 633px,"+
'778px" ';

imgHtml += 'width="964"';

function generatePost(title){
  const date = new Date().toISOString().split("T")[0];
  const folderName = date+'-'+title.replaceAll(" ","-");
  const fullPath = '../blog/'+folderName;

  //creaating blog post folder
  fs.mkdirSync(fullPath);

  //creating blog post file
  fs.appendFileSync(fullPath+blogFile, '---\n')
  fs.appendFileSync(fullPath+blogFile, 'title: "'+title+'"\n');
  fs.appendFileSync(fullPath+blogFile, 'description: ""\n');
  fs.appendFileSync(fullPath+blogFile, 'tags: [""]\n');
  fs.appendFileSync(fullPath+blogFile, 'authors: brunopc\n');
  fs.appendFileSync(fullPath+blogFile, 'enableComments: true\n');
  fs.appendFileSync(fullPath+blogFile, 'image: ./thumbnail-default.webp\n');
  fs.appendFileSync(fullPath+blogFile, '---\n');
  fs.appendFileSync(fullPath+blogFile, '\n');

  return fullPath;
}

function generateThumbnails(path, deleteFile) {
  // List all files in the current directory
  fs.readdir('./', (err, files) => { 
    if (err) { 
      console.error('Error reading directory:', err); 
      return; 
    }

    // Find the first image file (you can customize the selection criteria)
    const imageFile = files.find((file) =>
      /\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/i.test(file)
    );

    if (!imageFile) {
      console.log('No image files found in the current directory.');
      return;
    }

    // Process and save resized images
    resolutions.forEach(({name, width}, index, array) => {
      const outputPath = path+'/'+output_filename+"-"+name+'.webp';
      sharp(imageFile)
        .resize(width)
        .webp({quality: 80})
        .toFile(outputPath, (err, info) => {
          if (err) {
            console.error(`Error resizing image to ${outputPath}`, err);
            return;
          }
          if("xlarge" === name){ //Add img to blog file
            fs.appendFileSync(path+blogFile, imgHtml+' height="'+info.height+'" />');
            fs.appendFileSync(path+blogFile, '\n');
          }
          if((index+1) === array.length){
            fs.renameSync("./"+imageFile, path+'/'+output_filename+'-original.webp');
          }
        })
    });
  });
}

const args = process.argv.slice(2);

if(args.length !== 1){
  console.log("Can't understand the post title")
  process.exit(1);
}

const path = generatePost(args[0]);

const imgFile = generateThumbnails(path);