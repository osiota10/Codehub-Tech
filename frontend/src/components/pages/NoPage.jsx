

const pic = {
  url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roberthalf.com%2Fsites%2Fdefault%2Ffiles%2F2020-01%2F01-music-at-work-rh.jpg&f=1&nofb=1&ipt=f1950c39be4f82691bf490135aff47961ee790f9f931301968cd065f553de62e&ipo=images'
}

const getStyle = (imgUrl) => {
  return {
    backgroundImage: `linear-gradient(to right, rgb(0, 237, 240), rgba(255, 255, 255, 0.0)), url(${imgUrl})`,
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // boxShadow: 'inset 0 0 0 100vh rgba(235, 237, 240, 0.93)',
  };
};


const NoPage = () => {
  return (
    <section>
      <section className="ratio ratio-21x9" style={getStyle(pic.url)}>
        <h1>404</h1>
      </section>
    </section>
  );
};

export default NoPage;