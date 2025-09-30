"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trabajemos Juntos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Si tienes alguna pregunta o quieres discutir un proyecto, no dudes en contactarme. Siempre estoy abierto
                a nuevas oportunidades y colaboraciones interesantes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-8">
        
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:alberto@alberlome.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alberlome@gmail.com
                  </a>
                </div>

                 <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Teléfono</p>
                  <a href="tel:+34679994514" className="text-muted-foreground hover:text-primary transition-colors">
                    +34 679 99 45 14
                  </a>
                </div>

                 <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">Valencia, España</p>
                </div>
              </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}
