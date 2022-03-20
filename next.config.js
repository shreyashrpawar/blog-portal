module.exports = {
  async redirects() {
    return [
      {
        source: '/3',
        destination: '/NextJS/nextjs-responsive-navbar',
        permanent: true,
      },
      {
        source: '/4',
        destination: '/CSS/learn-basic-CSS',
        permanent: true,
      },
      {
        source: '/posts/nextjs-responsive-navbar',
        destination: '/NextJS/nextjs-responsive-navbar',
        permanent: true,
      },
      {
        source: '/posts/nprogress-loading-bar-innextjs',
        destination: '/NextJS/nprogress-loading-bar-InNextjs',
        permanent: true,
      },
      {
        source: '/posts/installing-and-executing-rust',
        destination: '/Rust/Installing-and-Executing-Rust',
        permanent: true,
      }
    ]
  },
}

