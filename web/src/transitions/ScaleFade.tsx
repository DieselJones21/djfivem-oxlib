import { AnimatePresence, motion } from 'framer-motion';

const ScaleFade: React.FC<{
  visible: boolean;
  children: React.ReactNode;
  onExitComplete?: () => void;
  fill?: boolean;
}> = ({ visible, children, onExitComplete, fill }) => {
  return (
    <>
      <AnimatePresence onExitComplete={onExitComplete}>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18, ease: [0, 0, 0.2, 1] } }}
            exit={{ opacity: 0, y: 8, transition: { duration: 0.12, ease: [0.4, 0, 1, 1] } }}
            style={
              fill
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 0,
                    maxHeight: 'inherit',
                    background: 'transparent',
                    borderRadius: 'inherit',
                  }
                : { background: 'transparent' }
            }
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScaleFade;
