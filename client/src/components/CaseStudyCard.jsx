import { useState } from 'react';

const CaseStudyCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                cursor: 'pointer',
                transition: 'all 0.3s var(--ease)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Project Image/Thumbnail */}
            <div style={{
                width: '100%',
                height: '200px',
                background: `linear-gradient(135deg, ${project.color1 || 'var(--primary)'}, ${project.color2 || 'var(--accent)'})`,
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s var(--ease)',
            }}>
                {project.icon || '🌐'}
            </div>

            {/* Project Title */}
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>
                {project.title}
            </h3>

            {/* Project Category */}
            <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
            }}>
                {project.category}
            </p>

            {/* Project Description */}
            <p style={{
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                flex: 1,
            }}>
                {project.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-2 gap-2" style={{ marginBottom: '1.5rem' }}>
                {project.metrics?.map((metric, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <div style={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: 'var(--success)',
                        }}>
                            {metric.value}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                            {metric.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Technologies */}
            {project.technologies && (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                }}>
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            style={{
                                padding: '4px 12px',
                                background: 'rgba(96, 165, 250, 0.1)',
                                border: '1px solid rgba(96, 165, 250, 0.2)',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.75rem',
                                color: 'var(--primary)',
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CaseStudyCard;
