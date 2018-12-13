import { Promise } from 'es6-promise';

/**
 * A 360 degree slider element
 */
class Slider {

  private activeImage: number;

  private dragOffset: number;

  private lastPosition: number;

  private mouseDownId: number;

  private preloadedImgElements: Element[];

  private sliderElement: HTMLElement;

  constructor(id: string, private imagePaths: string[], loadingImagePath: string, dragOffset: number = 2) {
    const sliderElement = document.getElementById(id);

    if (sliderElement === null) {
      throw new Error('No slider with id ' + id + ' found.');
    }

    this.activeImage = 0;
    this.dragOffset = dragOffset;
    this.lastPosition = 0;
    this.mouseDownId = -1;
    this.preloadedImgElements = [];
    this.sliderElement = sliderElement;

    const overlayElement = document.createElement('div');
    overlayElement.style.width = '100%';
    overlayElement.style.height = '100%';
    overlayElement.style.position = 'absolute';
    this.sliderElement.appendChild(overlayElement);

    const imageElement = document.createElement('img');
    imageElement.src = loadingImagePath;
    this.sliderElement.appendChild(imageElement);

    this.preloadImages(this.imagePaths).then((imgs: Element[]) => {
      if (sliderElement === null) {
        throw new Error('sliderElement does not exist.');
      }
      // all images are loaded now and in the array imgs
      this.preloadedImgElements = imgs;

      for (let i = 0; i < this.preloadedImgElements.length; i++) {
        setTimeout(() => this.replaceImgElement(this.preloadedImgElements[i]), i * 25);
      }

      sliderElement.addEventListener('mousedown', this.mouseDown);
      document.body.addEventListener('mouseup', this.mouseUp);
      document.body.addEventListener('mousemove', this.mouseMove);

      sliderElement.addEventListener('touchstart', this.touchStart);
      document.body.addEventListener('touchmove', this.touchMove);
      document.body.addEventListener('touchend', this.touchEnd);

    }, (loadingImageError) => {
      // at least one image failed to load
      throw loadingImageError;
    });

  }

  mouseDown = (event: Event) => {
    this.mouseDownId = 1;
    this.lastPosition = (event as MouseEvent).screenX;
  }

  mouseMove = (event: Event) => {
    if (this.mouseDownId === 1) {
      this.onDrag((event as MouseEvent).screenX);
    }
  }

  mouseUp = () => {
    this.mouseDownId = -1;
  }

  onDrag(currentPosition: number) {
    if (currentPosition + this.dragOffset < this.lastPosition) {
      console.log('left');
      this.lastPosition = currentPosition;
      if (this.activeImage !== this.imagePaths.length - 1) {
        this.activeImage = this.activeImage + 1;
      } else {
        this.activeImage = 0;
      }

      console.log(this.imagePaths[this.activeImage]);
      this.replaceImgElement(this.preloadedImgElements[this.activeImage]);
    }

    if (currentPosition - this.dragOffset > this.lastPosition) {
      console.log('right');
      this.lastPosition = currentPosition;
      if (this.activeImage !== 0) {
        this.activeImage = this.activeImage - 1;
      } else {
        this.activeImage = this.imagePaths.length - 1;
      }

      console.log(this.imagePaths[this.activeImage]);
      this.replaceImgElement(this.preloadedImgElements[this.activeImage]);
    }
  }

  preloadImages(srcs: string[]): Promise<HTMLImageElement[]> {
    const promises = srcs.map<Promise<HTMLImageElement>>((src) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = img.onabort = () => {
          reject(src);
        };
        img.src = src;
      });
    });
    return Promise.all(promises);
  }

  replaceImgElement(newImgElement: Element) {
    const img = this.sliderElement.querySelector('img');
    if (img === null) {
      throw new Error('No image found.');
    }
    this.sliderElement.replaceChild(newImgElement, img);
    // sliderElement.querySelector('img').src = newImgElement.src;
  }

  touchEnd = (_event: Event) => {
    this.mouseDownId = -1;
  }

  touchMove = (event: Event) => {
    if (this.mouseDownId === 1) {
      this.onDrag((event as TouchEvent).touches[0].screenX);
    }
  }

  touchStart = (event: Event) => {
    this.mouseDownId = 1;
    this.lastPosition = (event as TouchEvent).touches[0].screenX;
  }
}

let betonImages :string[] = [];
let musikerImages :string[] = [];
let treetopImages :string[] = [];

let betonImagesReduced :string[] = [];
let musikerImagesReduced :string[] = [];
let treetopImagesReduced :string[] = [];

for(let i=0; i<72; i++) {
  betonImages.push(`./img/beton_modell/beton_modell_${('0'+i).slice(-2)}.jpg`);
}
for(let i=0; i<120; i++) {
	musikerImages.push(`./img/musiker_modell/musiker_modell_${('00'+i).slice(-3)}.jpg`);
}
for(let i=0; i<297; i++) {
	treetopImages.push(`./img/treetop_modell/treetop_modell_${('0000'+i).slice(-5)}.jpg`);
}

for(let i=0; i<30; i++) {
  betonImagesReduced.push(`./img/beton_modell-reduced/30frames${('0'+i).slice(-2)}.jpg`);
}
for(let i=0; i<30; i++) {
	musikerImagesReduced.push(`./img/musiker_modell-reduced/30frames${('0'+i).slice(-2)}.jpg`);
}
for(let i=0; i<60; i++) {
	treetopImagesReduced.push(`./img/treetop_modell-reduced/60frames${('0'+i).slice(-2)}.jpg`);
}

export const betonSlider = new Slider(
  'betonSlider',
  betonImages,
  './assets/loading_icon.gif',
  0
  );

export const musikerSlider = new Slider(
  'musikerSlider',
  musikerImages,
  './assets/loading_icon.gif',
  0
  );

export const treetopSlider = new Slider(
  'treetopSlider',
  treetopImages,
  './assets/loading_icon.gif',
  0
  );


export const betonSliderReduced = new Slider(
  'betonSliderReduced',
  betonImagesReduced,
  './assets/loading_icon.gif',
  10
  );

export const musikerSliderReduced = new Slider(
  'musikerSliderReduced',
  musikerImagesReduced,
  './assets/loading_icon.gif',
  10
  );

export const treetopSliderReduced = new Slider(
  'treetopSliderReduced',
  treetopImagesReduced,
  './assets/loading_icon.gif',
  10
  );