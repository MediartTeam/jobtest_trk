import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const PersonInfo = ({person}) => {
    const [imgINFO, setImgINFO] = useState();

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.smotrim.ru/api/v1/pictures/${person.picId}/bq/redirect`)
            .then(response => response.blob())
            .then(res => setImgINFO(URL.createObjectURL(res)));
    }, [person])

    return (
        <Card sx={{ maxWidth: 286, overflow: "visible", height: "380px", borderRadius: "8px"}}>
            <CardMedia
                sx={{ height: 160, borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
                image={imgINFO}
            />
            <CardContent sx={{width: "254px", height: "193px", position: "relative", top: "17px", left: "16px", padding: 0}}>
                <Typography gutterBottom sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "1px",
                    textAlign: "left",
                    color: "#B8C2CC"
                }}>Ведущий</Typography>
                <Typography gutterBottom sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "28px",
                    letterSpacing: "0px",
                    textAlign: "left"
                }}>
                    {person.name}<br/>{person.surname}
                </Typography>
                <div className="linear_acticle">
                    about about about abou tabout about about about about about about about about about
                </div>
            </CardContent>
        </Card>
    );
};

export default PersonInfo;