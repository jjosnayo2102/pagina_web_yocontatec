'use server';

import { db } from '@/lib/db';
import { sendEmailNotification } from '@/lib/email';
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData: FormData) {
  const rawData = {
    name: formData.get('nombre') as string,
    email: formData.get('email') as string,
    subject: formData.get('asunto') as string,
    message: formData.get('mensaje') as string,
  };

  // Validación simple
  if (!rawData.name || !rawData.email || !rawData.subject || !rawData.message) {
    return { success: false, message: 'Todos los campos son obligatorios.' };
  }

  try {
    // 1. Guardar en PostgreSQL
    await db.contactMessage.create({
      data: {
        name: rawData.name,
        email: rawData.email,
        subject: rawData.subject,
        message: rawData.message,
      },
    });

    // 2. Intentar enviar correo (sin detener el proceso si falla)
    try {
      await sendEmailNotification(rawData);
    } catch (error) {
      console.error('Error enviando email:', error);
    }

    revalidatePath('/contacto');
    return { success: true, message: 'Mensaje enviado correctamente.' };
  } catch (error) {
    console.error('Error general:', error);
    return { success: false, message: 'Error al procesar tu solicitud.' };
  }
}