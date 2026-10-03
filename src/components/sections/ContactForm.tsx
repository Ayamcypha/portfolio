'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle, AlertCircle, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Label } from '@/components/ui/Label'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    setSubmitStatus('submitting')
    setErrorMessage('')

    try {
      const subject = encodeURIComponent(data.subject)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      )
      const mailtoLink = `mailto:michael.webdesignss@gmail.com?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      setSubmitStatus('success')
      reset()
    } catch (err) {
      setSubmitStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Failed to open email client')
    }
  }

  return (
    <section id="contact" className="py-20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollReveal direction="up">
          <header className="text-center mb-16">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            </p>
          </header>
        </ScrollReveal>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <ScrollReveal delay={0.1} direction="up">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register('name')}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  disabled={submitStatus === 'submitting'}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  disabled={submitStatus === 'submitting'}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="up">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Project inquiry / Collaboration / Other"
                {...register('subject')}
                aria-invalid={errors.subject ? 'true' : 'false'}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                disabled={submitStatus === 'submitting'}
              />
              {errors.subject && (
                <p id="subject-error" className="text-sm text-destructive" role="alert">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={6}
                {...register('message')}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                disabled={submitStatus === 'submitting'}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-destructive" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>
          </ScrollReveal>

          {submitStatus === 'success' && (
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg" role="status">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" aria-hidden="true" />
                <p className="text-green-800 dark:text-green-200">
                  Email client opened! Please send the email to complete your message.
                </p>
              </div>
            </ScrollReveal>
          )}

          {submitStatus === 'error' && (
            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg" role="alert">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" aria-hidden="true" />
                <p className="text-red-800 dark:text-red-200">
                  {errorMessage || 'Failed to open email client. Please try again.'}
                </p>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.25} direction="up">
            <Button type="submit" className="w-full sm:w-auto" disabled={submitStatus === 'submitting'}>
              {submitStatus === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                  Opening email client...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  Send via Email
                </>
              )}
            </Button>
          </ScrollReveal>
        </form>

        <ScrollReveal delay={0.3} direction="up">
          <p className="text-center text-sm text-muted-foreground mt-8">
            Or email directly at <a href="mailto:michael.webdesignss@gmail.com" className="text-primary hover:underline">michael.webdesignss@gmail.com</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}