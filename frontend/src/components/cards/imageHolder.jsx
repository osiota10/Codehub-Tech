
const pic = {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roberthalf.com%2Fsites%2Fdefault%2Ffiles%2F2020-01%2F01-music-at-work-rh.jpg&f=1&nofb=1&ipt=f1950c39be4f82691bf490135aff47961ee790f9f931301968cd065f553de62e&ipo=images'
}

function ImageHolder() {
    return (
        <div className='position-relative image-holder'>
            <img src={process.env.PUBLIC_URL + '/Vector.svg'} className="img-fluid  image-holder-bg" alt="..." />
            <img src={pic.url} className="position-absolute top-50 start-50 translate-middle img-fluid" alt="..." style={{ maxWidth: '90%' }} />
        </div>
    );
}

export default ImageHolder;