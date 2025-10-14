export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Swastik Eye Hospital. All rights reserved.</p>
        <p>
          Powered by{' '}
          <a href="https://maninfini.com" target="_blank" rel="noreferrer noopener" className="top">Maninfini Automation</a>
          .
          {' '}<a href="#chat" data-open-chat className="top">Need Help? Chat with us</a>
        </p>
      </div>
    </footer>
  )
}
