export const projects = [
  {
    title: 'Low-Latency Fog Detection & Mitigation Models',
    badge: 'Academic Research',
    badgeVariant: 'yellow',
    meta: 'IIITD • Lab 2024-25',
    subtitleIcon: 'fa-graduation-cap',
    subtitle: 'Supervised by Prof. Dr. A. Sharma (IIITD)',
    description:
      'Engineered real-time edge vision inference pipeline for automated vehicle navigation under extreme atmospheric visibility attenuation using customized quantization and pruning.',
    tech: ['PyTorch', 'TensorRT', 'YOLOv8', 'C++ LibTorch'],
    benchmarks: [
      { value: '4.2×', label: 'Inference Boost' },
      { value: '20ms', label: 'Down from 84ms' },
      { value: '93.4%', label: 'mAP@0.5' },
    ],
    github: 'https://github.com',
    secondary: { label: 'Report PDF', icon: 'fa-file-pdf', href: '#projects', variant: 'dark' },
  },
  {
    title: 'MicroKernel & Priority Preemptive Task Scheduler',
    badge: 'Low-Level Systems',
    badgeVariant: 'dark',
    meta: 'x86_64 Arch',
    subtitleIcon: 'fa-microchip',
    subtitle: 'Standalone Bare-Metal Implementation',
    description:
      'Architected a minimalist x86 microkernel featuring custom virtual memory paging tables, user-mode isolation, round-robin context switching, and IPC message passing.',
    tech: ['C99', 'x86 Assembly', 'QEMU', 'GDB Remote'],
    benchmarks: [
      { value: '< 12µs', label: 'Context Switch' },
      { value: '4-Level', label: 'Page Translation' },
      { value: '0 Leak', label: 'Memory Integrity' },
    ],
    github: 'https://github.com',
    secondary: { label: 'QEMU Demo', icon: 'fa-play', href: '#projects', variant: 'yellow' },
  },
];

// Full-width card shown below the grid
export const wideProject = {
  title: 'Distributed Vision Stream Pipeline & IPC Shared Memory',
  badge: 'High-Throughput',
  meta: 'Multi-Stream RTSP',
  description:
    'Engineered a zero-copy POSIX shared memory buffer pipeline synchronizing 16 high-res RTSP feeds with parallel CUDA decoding threads, eliminating ring-buffer cache contention.',
  tech: ['C++', 'POSIX SHM', 'FastAPI', 'Docker'],
  github: 'https://github.com',
};
