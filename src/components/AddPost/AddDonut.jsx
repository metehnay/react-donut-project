import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../configs/firebase";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
import { useContext, MainContext } from "../../hook/Context";
import RichEditor from "./RichEditor";


const AddDonut = () => {
  const { isAuth, setIsAuth } = useContext(MainContext);

  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [recipe, setRecipe] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      imageURL,
      recipe,
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,

      photoURL: auth.currentUser.photoURL,
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Container fluid="p-5 d-flex justify-content-center mt-5 pt-5">
        <Form>
          <Link to="/" className="btn btn-primary p-2 m-2">
            Back to homepage
          </Link>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={11}>
             Title
            </Form.Label>
            <Col sm={14}>
              <Form.Control
                type="text"
                placeholder="Title..."
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

       

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={11}>
              Photo
            </Form.Label>
            <Col sm={14}>
              <Form.Control
                type="text"
                placeholder="Donut Photo..."
                onChange={(e) => setImageURL(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            onChange={(e) => setRecipe(e.target.value)}
          >
            <Form.Label column sm={11}>
             Recipe
            </Form.Label>
            <Col sm={14}>
              <textarea type="text" className="form-control" placeholder="Recipe..." required />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mx-auto">
            <Col sm={{ span: 10, offset: 4 }}>
              <Button variant="primary" onClick={createPost}>
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
        
      </Container>
    </>
  );
};

export default AddDonut;