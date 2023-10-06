import Script from 'next/script'

const CustomHead: React.FC = () => {
  return (
    <head>
      <Script
        src="https://kit.fontawesome.com/372c90f6b7.js"
        crossOrigin="anonymous"
      />
    </head>
  )
}

export default CustomHead
