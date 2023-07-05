import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AiFillGithub } from 'react-icons/ai'
import UnnesLogo from '@/assets/logo-unnes.png'
import DefaultIMG from '@/assets/default.jpg'

function ImageChange() {
  const [nim, setNim] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the image URL based on the input value and handle different formats
    if (nim) {
      const imageUrl = `https://duanol.unnes.ac.id/v2/primer/user_ava/${nim}`;
      const imageFormat = imageUrl.split('.').pop(); // Get the file extension
  
      if (imageFormat === 'aspx') {
        // If the format is 'aspx', set a fallback image URL
        setImageUrl('');
      } else {
        // Otherwise, set the URL as is
        setImageUrl(imageUrl);
      }
    } else {
      // If input is empty, use a default URL
      setImageUrl(DefaultIMG);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNim(e.target.value);
  };

  useEffect(() => {
    // Set the default image URL as the initial state value for imageUrl
    setImageUrl(DefaultIMG);
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col">
        <nav className="bg-transparent py-4 sticky top-0">
          <div className="container mx-auto px-4">
            <img src={UnnesLogo} alt="UNNES Logo" width={100} />
          </div>
        </nav>
        <section className="flex-1 flex items-center justify-center text-center">
        <Card className="border border-transparent shadow-xl p-2 max-w-90 min-w-[20rem] max-h-[40rem]">
          <CardHeader>
            <CardTitle className='text-2xl'>UNNES Pasfoto</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={imageUrl} alt="Pas Foto" className="mx-auto my-4 rounded-lg" width={200} />
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <form onSubmit={handleSubmit}>
              <p>Cari pas foto dengan NIM</p>
              <Input type="text" className="mt-2" value={nim} onChange={handleChange} placeholder="Input NIM" />
              <Button type="submit" className="mt-2">Cari</Button>
            </form>
          </CardFooter>
        </Card>
        </section>
        <footer className="bg-transparent py-4 sticky bottom-0">
          <div className="container mx-auto px-8 flex justify-end items-center">
            <a href="https://github.com/dylansanjaya" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <AiFillGithub className="text-2xl mr-1" />
              <h1 className="ml-1">github.com/dylansanjaya</h1>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default ImageChange;
