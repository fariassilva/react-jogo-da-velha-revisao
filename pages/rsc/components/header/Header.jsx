import styles from './Header.module.css'

import Title from "../title/Title"
import Subtilte from "../subtitle/Subtitle"

function Header(){

  return(
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtilte>criado por Alessandro farias</Subtilte>

    </div>

  )
}
export default Header