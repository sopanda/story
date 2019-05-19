import React from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Badge
} from "reactstrap";
import { useTranslation } from "react-i18next";
import style from "./BookInfo.module.css";

const BookInfo = ({ item, full }) => {
  const { t } = useTranslation();
  return (
    <Container className={style.Container}>
      <Row>
        <Col md="4"><img className={style.CoverImg} src={item.img} alt={item.title}></img></Col>
        <Col md="8">
          <Jumbotron className={style.InfoContainer}>
            <h1 className="display-6">
              <Badge className={style.Badge}color="secondary">{`${item.title} - ${item.year}`}</Badge>
            </h1>
            <p className="lead">{`${item.author.firstname} ${
              item.author.lastname
              }`}</p>
            <p className="lead">
              <Button className={style.ReadBtn}>{t("read")}</Button>
            </p>
            <hr className="my-2" />
            <p>{item.description}</p>
            <hr className="my-2" />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default BookInfo;
