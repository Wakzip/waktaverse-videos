'use client';

import { useEffect, useState } from 'react';

export default function RenderInfo() {
  const [info, setInfo] = useState({ renderId: '', renderTimestamp: '' });

  useEffect(() => {
    async function fetchRenderInfo() {
      const res = await fetch('/api/client-info');
      const data = await res.json();
      setInfo(data);
    }

    fetchRenderInfo();
  }, []);

  return (
    <div>
      <p className='info_rander'>Build : {info.renderId||'None'}ㅣFinal render : {info.renderTimestamp||'None'}</p>
    </div>
  );
}
