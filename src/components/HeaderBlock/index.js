import s from './style.module.css'

const HeaderBlock = ({ title }) => {
  return (
    <div>
      <div>
        { 
          title && <h1 className={s.header}>
            {title}
          </h1>
        }
        <p>Simple Triple Triad Card Game</p>
      </div>
    </div>
  )
}

export default HeaderBlock;