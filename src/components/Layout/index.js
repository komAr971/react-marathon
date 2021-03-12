import s from './style.module.css'

const Layout = ({ title, descr, urlBg, colorBg }) => {
  return (
    <section 
      className={ s.root }
      style={{ 
        backgroundImage : `url(${urlBg})`,
        backgroundColor: colorBg
      }}
    >
      <div className={ s.wrapper }>
          <article>
              <div className={ s.title }>
                  { title && <h3>{ title }</h3> }
                  <span className={ s.separator }></span>
              </div>
              <div className= { `${s.desc} ${s.full}` }>
                  { descr && <p>{ descr }</p> }
              </div>
          </article>
      </div>
  </section>
  )
}

export default Layout;