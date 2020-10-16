import { createImages1602769242083 } from '../database/migrations/1602769242083-create_images';
import Image from '../models/Image';
import image from '../models/Image'

export default {
    render(image: Image){
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
};