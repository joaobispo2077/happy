import Image from '../models/Image';

export default {
  render(image: Image) {
    return {   
      id: image.id,
      url: `${process.env.API_URL}/uploads/${image.path}`,
      urlMobile: `http://192.168.10.102:3333/uploads/${image.path}`, //url for dev test
  
    };
  },

  renderMany(images: Image[]) {
   return images.map(image => this.render(image));
  }
}