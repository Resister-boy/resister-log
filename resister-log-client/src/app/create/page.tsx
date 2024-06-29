import React from 'react';
import CreateClientPage from '@/app/create/CreateClientPage';

const CreatePage = ({
  searchParams,
}: {
  searchParams: { type: 'md' | 'ed' | undefined };
}) => {
  const editorType = searchParams.type;
  return (
    <main>
      <CreateClientPage type={editorType} />
    </main>
  );
};

export default CreatePage;
