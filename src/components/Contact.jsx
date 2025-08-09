
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-30" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or how can i help you? Feel free to reach
            out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex items-center gap-4 p-4 glass-card rounded-lg">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto: skswhatsappbot@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  skswhatsappbot@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 glass-card rounded-lg">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <a
                  href="https://watext.me/bot"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8921602850
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 glass-card rounded-lg">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">InstaGram</h4>
                <a
                  href="https://instagram.com/sksb0t"
                  </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6 glass-card p-8 rounded-xl border border-white/10"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="your name"
                required
                className="bg-background/50 border-white/20 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@mail.com"
                required
                className="bg-background/50 border-white/20 focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <Textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                className="bg-background/50 border-white/20 focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send size={18} />}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
