import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from 'shared/atoms';

const Home = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  return (
    <section>
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id error nobis
        explicabo. Consequuntur aspernatur unde, aperiam eum nam, adipisci in
        dignissimos fugiat iusto, ipsam consequatur eaque iure. Officia
        doloribus animi blanditiis earum fugiat corrupti unde deleniti ipsam,
        itaque obcaecati inventore culpa labore voluptas fuga? Voluptate,
        quisquam consequatur laborum doloremque nulla veniam repellat veritatis
        necessitatibus numquam ab suscipit ex a asperiores dignissimos est
        iusto? Harum sed quis culpa? Voluptatem cumque ducimus officiis tempora,
        doloribus, fugiat sunt, numquam rerum debitis enim et ab animi sint
        quisquam non eaque nesciunt quas expedita quo? Officia error odio quae.
        Reiciendis minima dolorum eos laborum commodi!
      </p>

      {isLoggedIn ? (
        <PostBtn to="/post">
          <img src="img/addbtn.png" alt="글 작성 페이지로 가기" />
        </PostBtn>
      ) : null}
    </section>
  );
};

export default Home;

const PostBtn = styled(Link)`
  position: fixed;
  bottom: 15px;
  right: 25px;
`;
