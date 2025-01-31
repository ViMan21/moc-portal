import { Loader } from '@mantine/core';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function ToolsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://g2stobeq.ca/digital-catalogue/';
  }, [navigate]);

  return (
    <>  
      <Loader />
    </>
  );
}
  