import React from 'react';
import { Button, Card, Stack, Text, Textarea } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { asyncAddComment } from '../../states/threadDetail/action';

function CommentForm() {
  const { id } = useParams();
  const [content, onContentChange] = useInput('');

  const dispatch = useDispatch();

  const onComment = () => {
    dispatch(asyncAddComment({ content, id }));
  };
  return (
    <>
      <Card p="20px">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onComment();
          }}
        >
          <Stack direction="column" spacing="20px">
            <Text fontWeight="700">Beri Komentar</Text>
            <Textarea value={content} onChange={onContentChange} required />
            <Button type="submit" alignSelf="end" colorScheme="teal">
              Kirim
            </Button>
          </Stack>
        </form>
      </Card>
    </>
  );
}

export default CommentForm;
