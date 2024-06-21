"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import LoginModal from '@/app/component/LoginModal';
import { Button, Navbar } from 'react-bootstrap';
import NavTop from "./component/navTop/NavTop";
import NavBar from "./component/navTop/NavBar";
import Banner from "./component/banner/Banner";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div>
      <NavTop />

      <div><NavBar /></div>

      <Banner />
      

    </div>
  );
}
