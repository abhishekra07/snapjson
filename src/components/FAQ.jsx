import React, { useState } from "react";
import { Container, Typography, Box, Paper, IconButton } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why SNAP JSON FORMATTER?",
    answer:
      "Snap JSON Formatter is a powerful tool for formatting, minifying, and converting JSON to YAML. It also serves as a JSON validator, editor, and viewer, making it an essential utility for developers.",
  },
  {
    question: "Why format JSON online?",
    answer:
      "Online JSON formatting is fast, convenient, and requires no installation. It ensures quick validation and easy accessibility from anywhere, without any security risks.",
  },
  {
    question: "How do I format a JSON file?",
    answer:
      "Simply paste your JSON into the input box or upload a .json or .txt file. Click 'Format JSON,' and your data will be beautified instantly.",
  },
  {
    question: "Is my JSON data recorded or stored?",
    answer:
      "Absolutely not! We prioritize privacy. Your data is processed in real-time and never stored or shared.",
  },
  {
    question: "Can I use Snap JSON Formatter offline?",
    answer:
      "Currently, Snap JSON Formatter is an online tool. We focus on providing a seamless experience with regular updates and new features.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container sx={{ my: 8, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ maxWidth: "700px", margin: "auto" }}>
        {faqs.map((faq, index) => (
          <Paper
            key={index}
            sx={{
              mb: 2,
              p: 2,
              borderRadius: "10px",
              backgroundColor: "background.paper",
              boxShadow: 3,
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", textAlign: "left" }}
              >
                {faq.question}
              </Typography>
              <IconButton>
                {openIndex === index ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <Typography
                sx={{ mt: 1, textAlign: "left", color: "text.secondary" }}
              >
                {faq.answer}
              </Typography>
            </motion.div>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
