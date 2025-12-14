import { useMember } from '@/integrations';
import { motion } from 'framer-motion';
import { User, Mail, Calendar } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ProfilePage() {
  const { member } = useMember();

  return (
    <div className="w-full bg-primary min-h-screen px-6 py-16">
      <div className="max-w-[100rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-12 text-center">
            Your Profile
          </h1>

          <div className="max-w-3xl mx-auto bg-secondary rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col items-center mb-8">
              {member?.profile?.photo?.url ? (
                <Image src={member.profile.photo.url} alt={member.profile.nickname || 'Profile'} className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-secondary-foreground/10" />
              ) : (
                <div className="w-32 h-32 rounded-full bg-secondary-foreground/10 flex items-center justify-center mb-6">
                  <User className="w-16 h-16 text-secondary-foreground/40" />
                </div>
              )}
              
              <h2 className="font-heading text-3xl text-secondary-foreground mb-2">
                {member?.profile?.nickname || member?.contact?.firstName || 'Guest'}
              </h2>
              
              {member?.profile?.title && (
                <p className="font-paragraph text-lg text-secondary-foreground/70">
                  {member.profile.title}
                </p>
              )}
            </div>

            <div className="space-y-6">
              {member?.contact?.firstName && (
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <User className="w-5 h-5 text-secondary-foreground/60 mt-1" />
                  <div>
                    <p className="font-paragraph text-sm text-secondary-foreground/60 mb-1">
                      Full Name
                    </p>
                    <p className="font-paragraph text-base text-secondary-foreground">
                      {member.contact.firstName} {member.contact.lastName || ''}
                    </p>
                  </div>
                </div>
              )}

              {member?.loginEmail && (
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Mail className="w-5 h-5 text-secondary-foreground/60 mt-1" />
                  <div>
                    <p className="font-paragraph text-sm text-secondary-foreground/60 mb-1">
                      Email Address
                    </p>
                    <p className="font-paragraph text-base text-secondary-foreground">
                      {member.loginEmail}
                    </p>
                    {member.loginEmailVerified && (
                      <span className="inline-block mt-1 px-2 py-1 bg-secondary-foreground/10 rounded text-xs font-paragraph text-secondary-foreground/70">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              )}

              {member?._createdDate && (
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Calendar className="w-5 h-5 text-secondary-foreground/60 mt-1" />
                  <div>
                    <p className="font-paragraph text-sm text-secondary-foreground/60 mb-1">
                      Member Since
                    </p>
                    <p className="font-paragraph text-base text-secondary-foreground">
                      {new Date(member._createdDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              )}

              {member?.lastLoginDate && (
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Calendar className="w-5 h-5 text-secondary-foreground/60 mt-1" />
                  <div>
                    <p className="font-paragraph text-sm text-secondary-foreground/60 mb-1">
                      Last Login
                    </p>
                    <p className="font-paragraph text-base text-secondary-foreground">
                      {new Date(member.lastLoginDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
              <p className="font-paragraph text-sm text-secondary-foreground/60">
                Thank you for being a valued member of Sweet Bliss
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
