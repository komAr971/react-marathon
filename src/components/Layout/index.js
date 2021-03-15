import s from './style.module.css'
import cn from 'classnames'

const Layout = ({ title, urlBg, colorBg, children }) => {
  return (
    <section 
      className={ cn(s.root) }
      style={{ 
        backgroundImage : `url(${urlBg})`,
        backgroundColor: colorBg
      }}
    >
      <div className={ cn(s.wrapper) }>
          <article>
              <div className={ cn(s.title) }>
                  { title && <h3>{ title }</h3> }
                  <span className={ cn(s.separator) }></span>
              </div>
              <div className= { cn(s.desc, s.full) }>
                  {children}
              </div>
          </article>
      </div>
  </section>
  )
}

export default Layout;