import { useTheme } from 'styled-components'
import Title from '../components/Title'

const Index = () => {
  const theme = useTheme()
  return (
    <>
    <Title isMain={false}>코코코코코코코더 지인호입니다.</Title>
    </>
  )
}

export default Index