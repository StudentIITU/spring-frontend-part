import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchContainer = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter your search..."
                            aria-label="Search"
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchContainer;
