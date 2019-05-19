import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { useTranslation } from "react-i18next";
import style from './Book.module.css';

const Book = ({ item, full }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardImg top width="100%" src={item.img} alt={`${item.title} image`} />
      <CardBody>
        <CardTitle>{`${item.title} (${item.year})`}</CardTitle>
        <CardSubtitle>{`${item.author.firstname} ${
          item.author.lastname
        }`}</CardSubtitle>
        {full && <CardText>{item.description}</CardText>}
        <Button className={style.ReadBtn}>{t("read")}</Button>
      </CardBody>
    </Card>
  );
};

export default Book;
