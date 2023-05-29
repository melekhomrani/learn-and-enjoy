import { ChakraProvider } from '@chakra-ui/react'
import Router from './router'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  )
}

export default App