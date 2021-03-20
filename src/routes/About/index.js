import { useHistory } from 'react-router-dom'

const AboutPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/home');
  }
  return (
    <>
      <h1>This is About page</h1>
      <button onClick={handleClick}>
        Back Home
      </button>
    </>
  )
};

export default AboutPage;