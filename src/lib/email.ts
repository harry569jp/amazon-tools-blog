import nodemailer from 'nodemailer';

export async function sendEmail(subject: string, content: string, toEmails: string[], fromEmail: string, appPassword: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: fromEmail,
      pass: appPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmails.join(','),
      subject: subject,
      text: content,
    });
    console.log('邮件发送成功');
    return true;
  } catch (error) {
    console.error('邮件发送失败:', error);
    return false;
  }
} 