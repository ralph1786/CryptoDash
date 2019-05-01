const currencyImage = symbol => {
  switch (symbol) {
    case "BTC":
      return "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png";
    case "ETH":
      return "https://d172h4vc197skd.cloudfront.net/images/89/23/89231ba1d7cd720fb5d00106b33bf9db_4031156383d_t.png";
    case "XRP":
      return "https://res.cloudinary.com/teepublic/image/private/s--ILgn7BoI--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1529994595/production/designs/2827512_0.jpg";
    case "BCH":
      return "https://www.bitcoin.com/bitcoin-cash-brand/media-kit/green/3-bitcoin-cash-logo-ot-medium.png";
    case "LTC":
      return "https://cdn3.vectorstock.com/i/1000x1000/94/07/litecoin-ltc-logo-vector-20139407.jpg";
    case "EOS":
      return "https://hacked.com/wp-content/uploads/2018/04/EOS.jpg";
    default:
      break;
  }
};

export default currencyImage;
