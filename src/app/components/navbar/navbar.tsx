import { useRouter } from 'next/navigation';

import Bean from './bean';
import Other_Bean from './other_bean';
import styles from './navbar.module.css';
import drawer from './link_drawer.module.css';
import { use, useEffect, useRef, useState } from 'react';

export default function Home({ is_home }: { is_home: boolean }) {

  const router = useRouter();
  const [drawerState, setDrawerState] = useState(false);
  const navBar = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {

  //     if (window.scrollY > 50) {
  //       console.log(window.scrollY);
  //     }     
  //   })
  // }, []);

  function home() {
    if (!is_home) {
      router.push("/");
    }
  }

  function triggerDrawer() {
    if (drawerState) {
      navBar.current.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
      navBar.current.style.boxShadow = 'var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)';
      document.body.style.overflow = "auto";
      setDrawerState(false);
    } else {
      navBar.current.style.backgroundColor = 'white';
      navBar.current.style.boxShadow = 'none';

      document.body.style.overflow = "hidden";
      setDrawerState(true);
    }
  }

  function HomeText() {
    if (!is_home) {
      return <div className={styles.text} onClick={() => home()}>Hot Beans</div>
    } else {
      return <></>
    }
  }

  function push(path: string) {
    router.push(path);
    setDrawerState(false);
    navBar.current.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    navBar.current.style.boxShadow = 'var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)';
      
    document.body.style.overflow = "auto";
  }


  return (
    <nav className={styles.nav_container} ref={navBar}>
      <div className={styles.left_container}>
        <div className={styles.svg_container} onClick={() => home()}><Other_Bean /></div>
        <HomeText />
      </div>
      <div className={styles.right_container} onClick={() => triggerDrawer()}>
        <svg className={styles.hamburger} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
      </div>
      <AppDrawer />
    </nav>
  )

  function AppDrawer() {
    if (drawerState) {
      return (
        <div className={drawer.container}>
          <div className={drawer.links_container}>
            <div className={drawer.link} onClick={() => push("/")}>
              <div className={drawer.title}>Home</div>
              <div className={drawer.sub}>The Home Page: Contains our company profile.</div>
            </div>
            <div className={drawer.link} onClick={() => push("/employees")}>
              <div className={drawer.title}>Our Employees</div>
              <div className={drawer.sub}>Take a look at who runs our company.</div>
            </div>
            <div className={drawer.link} onClick={() => push("/opportunities")}>
              <div className={drawer.title}>Opportunities</div>
              <div className={drawer.sub}>Maybe consider working for us?</div>
            </div>
          </div>
          <div className={drawer.courses}>
            <div className={drawer.title}>Web Courses</div>
            <div className={drawer.sub_title}>Here are our recommended picks web courses to help you start your journey with web development!</div>
            <div className={drawer.grid}>Grid of the courses</div>
          </div>
        </div>
      )
    } else {
      return <></>
    }
  }


}


