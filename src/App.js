import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'

import background from './assets/bg.jpg'
console.log(background)

const App = () => {
  const headerTitle = "This is title"
  const headerDescr = "This is Description!"

  const urlBg = background;
  return (
    <>
      <Header title={ headerTitle } descr = { headerDescr }/>
      <Layout 
        title={ 'First layout' }
        descr={ 'First descr' }
        urlBg={ urlBg }
      />
      <Layout 
        descr={ 'Second descr' }
        colorBg={ '#e2e2e2' }
      />
      <Layout 
        title={ 'Third layout' }
        urlBg={ urlBg }
      />
      <Footer />
    </>
  )
}

export default App;