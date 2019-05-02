const currencyImage = symbol => {
  switch (symbol) {
    case "BTC":
      return "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png";
    case "ETH":
      return "https://d172h4vc197skd.cloudfront.net/images/89/23/89231ba1d7cd720fb5d00106b33bf9db_4031156383d_t.png";
    case "XRP":
      return "https://image.spreadshirtmedia.com/image-server/v1/mp/designs/1016387854,width=178,height=178,version=1523654712/ripple-xrp-new-logo-crypto-currency-bitcoin-hodl.png";
    case "BCH":
      return "https://www.bitcoin.com/bitcoin-cash-brand/media-kit/green/3-bitcoin-cash-logo-ot-medium.png";
    case "LTC":
      return "https://static1.squarespace.com/static/5a78883ba803bb706feafd92/t/5a82200008522962b660c976/1518474968211/?format=1500w";
    case "EOS":
      return "https://seeklogo.com/images/E/eos-logo-ECF31E0936-seeklogo.com.png";
    default:
      break;
  }
};

export default currencyImage;
