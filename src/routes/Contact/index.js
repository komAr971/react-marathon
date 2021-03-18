import { useHistory } from 'react-router-dom'

const ContactPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/home');
  }
  return (
    <>
      <h1>This is Contact page</h1>
      <button onClick={handleClick}>
        Back Home
      </button>
    </>
  )
};

export default ContactPage;