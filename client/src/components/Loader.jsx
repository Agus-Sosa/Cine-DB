import React from 'react'
import style from '../styles/loader.module.css'
const Loader = () => {
  return (
    <section style={{zIndex:10000000}} className={style.loader_container}>
    <div class={style.loader}>
  <div class={style.box}></div>
  <div class={style.box}></div>
  <div class={style.box}></div>
  <div class={style.box}></div>
</div>

  </section>
        )
}

export default Loader