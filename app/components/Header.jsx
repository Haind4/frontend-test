import 'antd/dist/antd.css';
import './style.css'

export default function Header(props) {
  const title = props?.title
  const description = props?.description
  const image = props?.image
  const url = props?.url
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={image} />
      <meta name="keywords" content="" />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.png" />
      <meta property="og:url" content={`${url}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" type="text/css" charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </>
  )
}
