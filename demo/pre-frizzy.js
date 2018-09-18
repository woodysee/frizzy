function initialiseExistingFilesDefinedByUser (uploader) {
  // console.log("The user can retrieve the sources of the existing images here. However, initialisers must be declared before invoking frizzy.js.");
  // console.log(uploader);
  // Resource format of JSON API v1.0 is used for existing files
  // The user can retrieve the sources of the existing images here.
  const data = [
    {
      id: 1,
      type: "image",
      attributes: {
        src: "https://s3-ap-southeast-1.amazonaws.com/airfrovstg/2018-08-13_95291.8198321946.jpg",
        caption: "Tsum Tsum at Bugis Street and Malay Street junction"
      }
    },
    {
      id: 0,
      type: "image",
      attributes: {
        src: "https://s3-ap-southeast-1.amazonaws.com/airfrovstg/2016-11-21_37155518992438.jpg",
        caption: "Korean banana milk"
      }
    }
  ];
  return data;
}
