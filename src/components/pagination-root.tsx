import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export type PaginationType = {
  total: number
  pageIndex: number
  onChangeIndex: (num: number) => void
}

export default function PaginationRounded(props: PaginationType) {
  return (
    <Stack spacing={2}>
      <Pagination sx={{button:{color: '#fff', border: '1px solid rgba(250, 250, 250, 0.3)'}}} onChange={(event, page)=>{
        props.onChangeIndex(page)
      }} page={props.pageIndex} count={Math.ceil(props.total / 10)} variant="outlined" shape="rounded" />
    </Stack>
  );
}
