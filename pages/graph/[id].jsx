import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';


function Graph() {
  const router = useRouter();
  const { id: graphId } = router.query;

  useEffect(() => {
    console.log('pre-check')

    if (!graphId) {
      console.log('not found')
      return;
    }

    console.log('found')
  }, [graphId]);


  return (
    <Layout>
      {graphId || 'Loading'}
    </Layout>
  );
}

export default Graph;
