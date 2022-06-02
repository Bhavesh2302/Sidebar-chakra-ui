import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    
    useDisclosure,
  Button,
  
  Input,
  } from '@chakra-ui/react' ;
  import { MdHome } from "react-icons/md";
  import { MdTrendingUp } from "react-icons/md";
  import {  BiCompass} from "react-icons/bi";
  import {   MdSettings } from "react-icons/md";
  import {  MdReorder } from "react-icons/md";
  

  import {   MdStarRate} from "react-icons/md";
  
  import { FaHome} from "react-icons/fa";
  import styles from"./style.module.css"


  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}><MdReorder/>
          Logo
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
         
        >
          <DrawerOverlay />
          <DrawerContent>
            {/* <DrawerCloseButton /> */}
            <DrawerHeader className={styles.sidebarheader}>LOGO</DrawerHeader>
  
            <DrawerBody>
         
        
            <div className={styles.sidebaricon}> <MdHome />Home </div>
            <br />
         
            <div className={styles.sidebaricon}>< MdTrendingUp />Trending</div>
            <br />
            <div className={styles.sidebaricon}>  < BiCompass />Explore</div>
            <br />
            <div className={styles.sidebaricon}> <MdStarRate />Favourites</div>
            <br />
            <div className={styles.sidebaricon}>  <  MdSettings />Settings</div>
            <br />
            </DrawerBody>
          
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default DrawerExample