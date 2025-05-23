import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";

const Contact = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("myzwjvbk");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success(t("messageSentSuccessfully"));
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error(t("messageFailedToSend"));
    }
  }, [state.succeeded, t]);

  return (
    <section className="section" id="contact">
      <div className="section-title-wrapper">
        <div className="section-title">
          <Typography variant="h2">{t("contact")}</Typography>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 py-4 sm:px-6">
          {/* Contact Form */}
          <div className="px-4 py-4 lg:px-10 lg:py-8 w-auto">
            <Card className="  lg:px-2 xl:px-8">
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group mb-6">
                      <TextField
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        label={t("name")}
                      />
                    </div>
                    <div className="form-group mb-6">
                      <TextField
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        label={t("email")}
                      />
                    </div>
                  </div>

                  <div className="form-group mb-6">
                    <TextField
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      label={t("Subject")}
                    />
                  </div>

                  <div className="form-group mb-6">
                    <TextField
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                      label={t("Message")}
                      multiline
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="contained"
                      // disabled={state.submitting}
                      style={{ backgroundColor: "#d92cf9" }}
                      className="flex justify-center items-center font-Ubuntu, sans-serif h-12 w-full"
                    >
                      {t("Submit")}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Address */}
          <div className="w-auto ">
            <div className=" px-4 py:4 lg:py-8 lg:px-16 bg-white text-gray-700">
              <div className=" mb-8">
                <Typography variant="h4">Asha Gaire</Typography>
                <Typography variant="body2">{t("webDeveloper")}</Typography>
              </div>
              <div className=" mb-8">
                <div className=" mb-6">
                  <Typography variant="body1">{t("email")}</Typography>
                  <Typography variant="body2">
                    asha.gaire95@gmail.com
                  </Typography>
                </div>
                <div className=" mb-6">
                  <Typography variant="body1">{t("website")}</Typography>
                  <Typography variant="body2">ashagaire.com.np</Typography>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 m-0">
                <div className="flex items-center justify-start">
                  <a
                    href="https://www.linkedin.com/in/asha-gaire-2b532217b"
                    target="_blank"
                    className="icons-list-contacts"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="https://github.com/ashagaire"
                    target="_blank"
                    className="icons-list-contacts"
                  >
                    <GitHubIcon />
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="https://asha-gaire.medium.com/"
                    target="_blank"
                    className="icons-list-contacts"
                  >
                    <FontAwesomeIcon icon={faMedium} className="medium-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
