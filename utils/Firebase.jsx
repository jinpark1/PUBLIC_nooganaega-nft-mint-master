import { useEffect, useState } from 'react'

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';
const listRef = ref(storage, 'media/redDapp/pet');

export default function Firebase() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    listAll(listRef).then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef, index) => {
        // All the items under listRef.
        getDownloadURL(itemRef)
					.then(url => {
          	let imagekitUrl = url.replace("https://firebasestorage.googleapis.com/v0/b/nooganaega-e5a3e.appspot.com", "https://ik.imagekit.io/gx9wdlr977/nooganaega/")
          	let updatedObj = {};
            console.log('---', imagekitUrl);
          	updatedObj[index] = imagekitUrl;
          	setImages(prev => ({ ...prev, ...updatedObj  }));
					})
					.catch(err => err)
					.finally(() => {
						setIsLoading(false);
        	})
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    }).finally(() => {
    })
  }, [])
}