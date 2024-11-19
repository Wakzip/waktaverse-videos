'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './slider.module.css';

const BannerSlider = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>

      </div>
    );
  }

  return (
    <div>
        
    </div>
  );
};

export default BannerSlider;
